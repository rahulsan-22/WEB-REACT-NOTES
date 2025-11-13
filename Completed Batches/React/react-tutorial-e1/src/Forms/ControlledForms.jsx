// import { useState } from "react"
// const ControlledForms = () => {
//     let [details, setDetails] = useState({
//         name: "",
//         email: "",
//         password: "",
//         phone: "",
//         dob: "",
//         gender: "",
//         skills: [],
//         country: "",
//         feedback: "",
//         photoId: ""
//     })
//     let { name, email, password, phone, dob, gender, skills, country, feedback, photoId } = details
//     let handleNameChange = (e) => {
//         setDetails({ ...details, name: e.target.value })
//     }
//     let handleEmailChange = (e) => {
//         setDetails({ ...details, email: e.target.value })
//     }
//     let handlePasswordChange = (e) => {
//         setDetails({ ...details, password: e.target.value })
//     }
//     let handlePhoneChange = (e) => {
//         setDetails({ ...details, phone: e.target.value })
//     }
//     let handleDobChange = (e) => {
//         setDetails({ ...details, dob: e.target.value })
//     }
//     let handleGenderChange = (e) => {
//         setDetails({ ...details, gender: e.target.value })
//     }
//     let handleSkillsChange = (e)=>{
//         setDetails({...details,skills:[...skills,e.target.value]})
//     }
//     let handleCountryChange = (e) => {
//         setDetails({ ...details, country: e.target.value })
//     }
//     let handleFeedbackChange = (e) => {
//         setDetails({ ...details, feedback: e.target.value })
//     }
//     let handlePhotoIdChange = (e) => {
//         setDetails({ ...details, photoId: e.target.value })
//     }
//     let handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(details)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <fieldset>
//                 <legend>Registration Form 🙏</legend>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
//                 <br /><br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
//                 <br /><br />
//                 <label htmlFor="password">Password:</label>
//                 <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
//                 <br /><br />
//                 <label htmlFor="phone">Phone:</label>
//                 <input type="tel" name="phone" id="phone" value={phone} onChange={handlePhoneChange} />
//                 <br /><br />
//                 <label htmlFor="dob">Dob:</label>
//                 <input type="datetime-local" name="dob" id="dob" value={dob} onChange={handleDobChange} />
//                 <br /><br />
//                 <label htmlFor="gender">Gender:</label>
//                 <div value={gender} onChange={handleGenderChange}>
//                     <input type="radio" name="gender" id="male" value="male" />
//                     <label htmlFor="male">Male</label>
//                     <input type="radio" name="gender" id="female" value="female" />
//                     <label htmlFor="female">Female</label>
//                 </div>
//                 <br />
//                 <label htmlFor="skills">Skills:</label>
//                 <div value={skills} onChange={handleSkillsChange}>
//                     <input type="checkbox" name="skills" id="html" value="Html"/>
//                     <label htmlFor="html">Html</label>
//                     <input type="checkbox" name="skills" id="css" value="Css"/>
//                     <label htmlFor="css">Css</label>
//                     <input type="checkbox" name="skills" id="js" value="Js"/>
//                     <label htmlFor="js">Js</label>
//                     <input type="checkbox" name="skills" id="react" value="React"/>
//                     <label htmlFor="react">React</label>
//                 </div>
//                 <br />
//                 <label htmlFor="country">Country:</label>
//                 <select name="country" id="country" value={country} onChange={handleCountryChange}>
//                     <option>India</option>
//                     <option>Russia</option>
//                     <option>Pakistan</option>
//                     <option>Australia</option>
//                 </select>
//                 <br /><br />
//                 <label htmlFor="feedback">Feedback:</label>
//                 <textarea name="feedback" id="feedback" rows="5" cols="100" value={feedback} onChange={handleFeedbackChange}></textarea>
//                 <br /><br />
//                 <label htmlFor="photoId">Upload Id:</label>
//                 <input type="file" name="photoId" id="photoId" value={photoId} onChange={handlePhotoIdChange} />
//                 <br /><br />
//                 <input type="submit" value="Register" />
//             </fieldset>
//         </form>
//     )
// }
// export default ControlledForms


//!Single HandleChange
import { useState } from "react"
const ControlledForms = () => {
    let [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        dob: "",
        gender: "",
        skills: [],
        country: "",
        feedback: "",
        photoId: ""
    })
    let { name, email, password, phone, dob, gender, skills, country, feedback} = details

    let handleChange = (e) => {
        let {name,value,checked,type} = e.target
        if(type=="checkbox"){
          if(checked){
            setDetails({...details,skills:[...skills,value]})
          }
        }else if(type=="file"){
          setDetails({...details,photoId:e.target.files[0].name})
        }else{
         setDetails({...details,[name]:value})
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(details)
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Registration Form 🙏</legend>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={handleChange} />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={handleChange} />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={password} onChange={handleChange} />
                <br /><br />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" name="phone" id="phone" value={phone} onChange={handleChange} />
                <br /><br />
                <label htmlFor="dob">Dob:</label>
                <input type="datetime-local" name="dob" id="dob" value={dob} onChange={handleChange} />
                <br /><br />
                <label htmlFor="gender">Gender:</label>
                <div value={gender} onChange={handleChange}>
                    <input type="radio" name="gender" id="male" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label htmlFor="female">Female</label>
                </div>
                <br />
                <label htmlFor="skills">Skills:</label>
                <div value={skills} onChange={handleChange}>
                    <input type="checkbox" name="skills" id="html" value="Html" />
                    <label htmlFor="html">Html</label>
                    <input type="checkbox" name="skills" id="css" value="Css" />
                    <label htmlFor="css">Css</label>
                    <input type="checkbox" name="skills" id="js" value="Js" />
                    <label htmlFor="js">Js</label>
                    <input type="checkbox" name="skills" id="react" value="React" />
                    <label htmlFor="react">React</label>
                </div>
                <br />
                <label htmlFor="country">Country:</label>
                <select name="country" id="country" value={country} onChange={handleChange}>
                    <option>India</option>
                    <option>Russia</option>
                    <option>Pakistan</option>
                    <option>Australia</option>
                </select>
                <br /><br />
                <label htmlFor="feedback">Feedback:</label>
                <textarea name="feedback" id="feedback" rows="5" cols="100" value={feedback} onChange={handleChange}></textarea>
                <br /><br />
                <label htmlFor="photoId">Upload Id:</label>
                <input type="file" name="photoId" id="photoId" onChange={handleChange} />
                <br /><br />
                <input type="submit" value="Register" />
            </fieldset>
        </form>
    )
}

export default ControlledForms