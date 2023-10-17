Your application should open in a default browser window. If it doesn't, navigate to http://localhost:3000/.

How to Use:
When you open the app, you'll see a button to toggle the profile.
Clicking the button will display or hide the person's profile based on the show state.
At the bottom, you'll notice a timer indicating the time since the component was mounted.
Key Components:
App Component: The main class-based component where all the functionalities reside.
State: Contains the Person profile (fullName, bio, imgSrc, profession) and a show boolean.
Component Lifecycle: componentDidMount() lifecycle method is used to start the timer using setInterval, and componentWillUnmount() is used to clear the interval when the component is unmounted.
Note:
This is a basic React application created for learning purposes. It highlights the use of class-based components, state, and component lifecycle methods.

