import { createSlice } from "@reduxjs/toolkit";

const DUMMY_COURSES = [
  {
    id: "1",
    author: "Steve",
    courseDescription: "Thisisastartercourseforshieldhandling",
    discount: 11,
    discountValidTill: "2021-08-28T01:30:00.000Z",
    price: 10000,
    tags: ["worldsaving", "course"],
    title: "Course for shield handling",
  },
  {
    id: "2",
    author: "Loki",
    courseDescription: "TypeScript",
    discount: 0,
    discountValidTill: "2021-07-27T20:30:00.000Z",
    price: 1400,
    tags: ["mischief"],
    title: "Deepdive into typescript",
  },
  {
    id: "3",
    author: "Hardy",
    courseDescription: "AgularCourse",
    discount: 7,
    discountValidTill: "2021-07-27T20:30:00.000Z",
    price: 1400,
    tags: ["Angular"],
    title: "How to learn Angular",
  },
  {
    id: "4",
    author: "Stephen",
    courseDescription: "TypescriptCourse",
    discount: 9,
    discountValidTill: "2021-07-27T20:30:00.000Z",
    price: 1400,
    tags: ["TypeScript"],
    title: "How to learn Typescript",
  },
  {
    id: "5",
    author: "Maximilian",
    courseDescription: "AngularEssentials",
    discount: 10,
    discountValidTill: "2021-07-27T20:30:00.000Z",
    price: 1400,
    tags: ["Angular"],
    title: "How to start angular",
  },
  {
    id: "6",
    author: "Harry",
    courseDescription: "AngularCrashCourse",
    discount: 7,
    discountValidTill: "2021-07-27T20:30:00.000Z",
    price: 1400,
    tags: ["Angular"],
    title: "How to begin Angular",
  },
  {
  id: "7",
  author: "Maximilian",
  courseDescription: "CompleteAngularCourse",
  discount: 12,
  discountValidTill: "2021-07-27T20:30:00.000Z",
  price: 1400,
  tags: [
  "Angular"
  ],
  title: "DeepdiveintoAngular",
  }
];

const courseSlice = createSlice({
  name: "course",
  initialState: {
    allCourses: DUMMY_COURSES,
    coursesInCart: [],
    wishlistCourses: [],
    totalCheckoutAmount: 0,
    selectedCourse: {},
    userDetail: { displayName: '', firstName: '', lastName: '', about: '', interest: '', isProfessional: false, experience: '0-5', expertise: 'react', role: ''  }
  },
  reducers: {
    addCourseToCart(state, action) {
      const newCourse = action.payload;
      state.coursesInCart.push(newCourse);
      let checkoutAmount = 0;
      state.coursesInCart.forEach(
        (course) =>
          (checkoutAmount +=
            course.discount > 0
              ? course.price - (course.price * course.discount) / 100
              : course.price)
      );
      state.totalCheckoutAmount = checkoutAmount;
    },
    removeCourseFromCart(state, action) {
      const remainingCourses = state.coursesInCart.filter(
        (item) => item.id !== action.payload
      );
      const removedCourse = state.coursesInCart.find(
        (item) => item.id === action.payload
      );
      let checkoutAmount = state.totalCheckoutAmount;
      checkoutAmount -= removedCourse.discount > 0
      ? removedCourse.price - (removedCourse.price * removedCourse.discount) / 100
      : removedCourse.price
      state.coursesInCart = remainingCourses;
      state.totalCheckoutAmount = checkoutAmount
    },
    checkoutCart(state) {
      state.coursesInCart = [];
      state.totalCheckoutAmount = 0;
    },
    selectCourse(state, action) {
      const selectedCourse = state.allCourses.find(
        (course) => course.id === action.payload
      );
      state.selectedCourse = selectedCourse;
    },
    addToWishlist(state, action) {
      const course = state.allCourses.find(
        (item) => item.id === action.payload
      );
      if (!state.wishlistCourses.includes(course))
        state.wishlistCourses.push(course);
    },
    removeFromWishlist(state, action) {
      const remainingCourses = state.wishlistCourses.filter(
        (item) => item.id !== action.payload
      );
      state.wishlistCourses = remainingCourses;
    },
  },
});

export const courseActions = courseSlice.actions;

export default courseSlice;
