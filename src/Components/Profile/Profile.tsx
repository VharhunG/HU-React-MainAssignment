import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { uiActions } from "../../Store/ui-slice"
import "./Profile.css"
const Profile: React.FC = () => {

    const dispatch = useDispatch()

    const [userDetail, setUserDetail] = useState({ displayName: 'Joey Tribbiani', firstName: 'Joey', lastName: 'Tribbiani', about: "I'm a front end developer with 4 years of experience",
    interest: 'Developer', professionalStatus: "student", experience: '0-5', expertise: 'react', role: 'Senior Software Engineer'  })

    const [experienced, setExperienced] = useState(false)

    const [isValid, setIsValid] = useState(true)

    const save = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(uiActions.toggleShowModal({text: "Your profile is saved", page: 'courseAdded'}))
    }

    const handleExperience = (value: boolean) => {
        setUserDetail({...userDetail, professionalStatus: value ? 'professional' : 'student'})
        setExperienced(!value)
    }

    const checkValidity = () => {
        if (userDetail.displayName.length > 0 && userDetail.firstName.length > 0 && userDetail.lastName.length > 0 && userDetail.about.length > 0 ) {
            setIsValid(true)
        } else setIsValid(false)
    }

    useEffect(() => {
        checkValidity()
    }, [userDetail])

    useEffect(() => {
        dispatch(uiActions.changeBannerText('My Profile'))
    }, [dispatch])
    
    return (
        <form>
        <div className="profile-comp">
            <div className="photo-comp"></div>
            <div className="profile-details">
                <div className="name-comp">
                    <div className="display-name-comp">
                        <label htmlFor="displayName" className="name-label">Display Name</label>
                        <input id="displayName" type="text" name="display-name" className="display-name" role="handle-dname" 
                        value={userDetail.displayName} onChange={(event) => setUserDetail({...userDetail, displayName: event.target.value})}/>
                    </div>
                    <div className="first-name-comp">
                        <label htmlFor="firstName" className="name-label">First Name</label>
                        <input type="text" id="firstName" className="first-name"  role="handle-fname"
                        value={userDetail.firstName} onChange={(event) => setUserDetail({...userDetail, firstName: event.target.value})}/>
                    </div>
                    <div className="last-name-comp">
                        <label htmlFor="lastName" className="name-label">Last Name</label>
                        <input type="text" id="lastName" className="last-name" role="handle-lname"
                        value={userDetail.lastName} onChange={(event) => setUserDetail({...userDetail, lastName: event.target.value})}/>

                    </div>
                </div>
                <div className="about-yourselt-comp">
                    <label htmlFor="aboutYourself" className="name-label">About Yourself</label>
                    <textarea id="aboutYourself" className="about-yourself" role="handle-about"
                        value={userDetail.about} onChange={(event) => setUserDetail({...userDetail, about: event.target.value})}/>
                </div>
                <div className="area-of-interest-comp">
                    <label  className="name-label">Your Area of Interest</label>
                            <label className="name-label"><input type="checkbox"
                            value={userDetail.interest} onChange={(event) => setUserDetail({...userDetail, interest: event.target.value})}/> Designer </label>   
                            <label className="name-label"><input type="checkbox" 
                            value={userDetail.interest} onChange={(event) => setUserDetail({...userDetail, interest: event.target.value})}/>Developer</label>
                            <label className="name-label"><input type="checkbox" 
                            value={userDetail.interest} onChange={(event) => setUserDetail({...userDetail, interest: event.target.value})}/>Project-manager</label>
                            <label className="name-label"><input type="checkbox"
                            value={userDetail.interest} onChange={(event) => setUserDetail({...userDetail, interest: event.target.value})}/>Sales</label>
                </div>
                <div className="radio-input-comp">
                    <label  className="name-label">Are you a Student or Professional</label>
                    <label htmlFor="yes" className="name-label"><input type="radio" id="yes" name="student-prof" 
                    value={userDetail.professionalStatus} onChange={() => handleExperience(true)}/> Student </label>   
                    <label htmlFor="no" className="name-label"><input type="radio" id="no" name="student-prof" 
                    value={userDetail.professionalStatus} onChange={() => handleExperience(false)}/> Professional </label>
                </div>
                {experienced && (<div className="experience-comp">
                    <div>
                        <label  className="name-label">How much of experience you have</label>
                        <div style={{display:"flex"}}>
                            <div className="radio-label"><label htmlFor="yes" ><input type="radio" id="yes" value="0-5" name="experience" checked disabled/>0-5</label> </div>
                            <div className="radio-label"><label htmlFor="no" className="radio-label"><input type="radio" id="no" value="5-10" name="experience" disabled/>5-10</label></div>
                            <div className="radio-label"><label htmlFor="no" className="radio-label"><input type="radio" id="no" value="10-above" name="experience" disabled/>10 and above</label></div>
                        </div>
                    </div>
                    <div>
                    <label  className="name-label">What is your expertise</label>
                        <div style={{display:"flex"}}>
                            <div className="radio-label"><label htmlFor="yes" ><input type="radio" id="yes" value="java" name="expertise" disabled/>Java</label></div>
                            <div className="radio-label"><label htmlFor="no" ><input type="radio" id="no" value="react" name="expertise" checked disabled/>React</label></div>
                            <div className="radio-label"><label htmlFor="no" ><input type="radio" id="no" value="backend" name="expertise" disabled/>Backend</label></div>
                        </div>
                    </div>
                    <div>
                    <label  className="name-label">Mention your role</label>
                    <input type="text" id="role" className="role" 
                    value={userDetail.role} onChange={(event) => setUserDetail({...userDetail, role: event.target.value})}/>
                    </div>
                </div>)}
                <button style={isValid ? {float:"right", marginTop:"20px"} : {float:"right", marginTop:"20px", backgroundColor: "grey"}} className="add-to-cart" role="submit" onClick={save} disabled={!isValid}>Save</button>
            </div>
        </div>
        </form>
    )
}

export default Profile
