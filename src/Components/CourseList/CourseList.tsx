import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { courseActions } from "../../Store/course-slice"
import { uiActions } from "../../Store/ui-slice"
import CourseItem from "../CourseItem/CourseItem"
import Dropdown from "../UI/Dropdown/Dropdown"
import "./CourseList.css"

const CourseList: React.FC<{ searchKey: string }> = (props) => {

    const dispatch = useDispatch()

    const coursesInCart = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.coursesInCart)
    const allCourses = useSelector<RootState, CourseState[]>((state: RootState) => state.courseReducer.allCourses)

    const [courses, setCourses] = useState(allCourses)

    interface RootState {
        courseReducer: {
            coursesInCart: [],
            allCourses: []
        }
    }

    interface CourseState {
        id: string;
        title: string;
        author: string;
        price: number;
        discount: number;
        tags: [];
    }

    const addToCart = (id: String) => {
        const newCourse : CourseState | undefined = courses.find((course) => (course.id === id))
        if (newCourse && coursesInCart.includes(newCourse)) {
            dispatch(uiActions.toggleShowModal({text: "Already exists in the cart", page: 'courseExists'}))
        } else {
            dispatch(courseActions.addCourseToCart(newCourse))
            dispatch(uiActions.toggleShowModal({text: "Course successfully added in the cart", page: 'courseAdded'}))   
        }
    }

    const sort = (sortType: string) => {
        const sortedArr = [...allCourses]
    
        if (sortType === 'high') {
            sortedArr.sort((a: CourseState,b: CourseState) => {
                const priceA = a.discount > 0 ? a.price - a.price * a.discount/100 : a.price
                const priceB = b.discount > 0 ? b.price - b.price * b.discount/100 : b.price
                return priceB-priceA
            })
        } else {
            sortedArr.sort((a: CourseState,b: CourseState) => {
                const priceA = a.discount > 0 ? a.price - a.price * a.discount/100 : a.price
                const priceB = b.discount > 0 ? b.price - b.price * b.discount/100 : b.price
                return priceA-priceB
            })
        }
        setCourses(sortedArr)

    }

    const paginate = (value: number) => {
        let courseList = []
        if (value === 1) {
            courseList = allCourses.filter((val,index) => index >= 0 && index < 4)
        } else {
            courseList = allCourses.filter((val,index) => index >= 4 && index < 8)
        }
        setCourses(courseList)
    }

    useEffect(() => {
        if (props.searchKey === '') return paginate(1)
        const filteredArr = allCourses.filter((course) => course.title.toLowerCase().includes(props.searchKey.toLowerCase()) || course.author.toLowerCase().includes(props.searchKey.toLowerCase()))
        setCourses(filteredArr)
    }, [props.searchKey, allCourses])

    useEffect(() => {
        paginate(1)
    }, [])

    return (
        <div style={{flex:"2"}}>
            <div style={{"display":"flex", "justifyContent":"space-between","marginBottom": "20px"}}>
                <div className="all-courses"><b>All Courses</b></div>
                {/* <button>Course price</button> */}
                <Dropdown changeSort={(sortType) => sort(sortType)} />
            </div>
            <div>
                {courses.map((courses) => <CourseItem tags={courses.tags} addToCart={(id) => addToCart(id)}
                id={courses.id} title={courses.title}
                author={courses.author} price={courses.price}
                key={courses.id} discount={courses.discount} />)}
            </div>
            <div style={{display:"flex", "alignItems": "center"}}>
                <p style={{color: "#e25b32"}}>{"<"}</p>
                <div style={{display:"flex"}}>
                    {[1,2].map((val) => <div className="page-num" role={val.toString()} onClick={() => paginate(val)} key={val}><span>{val}</span></div>)}
                </div>
                <p style={{color: "#e25b32"}}>{">"}</p>
            </div>
        </div>
    )
}

export default CourseList