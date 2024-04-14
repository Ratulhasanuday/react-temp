import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSumbit = data => {
  //   console.log('Sign up data',data);
  // }
  // const handleUpdateProfile=data=>{
  //   console.log('Update profile',data);
  // }
  return (
    <>

      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm handleSumbit={handleSignUpSumbit} formTitle={'Sign UP'}>
        <div>
          <h1>Sign Up</h1>
          <p>Please Sign Up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSumbit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your Profile Upadated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
