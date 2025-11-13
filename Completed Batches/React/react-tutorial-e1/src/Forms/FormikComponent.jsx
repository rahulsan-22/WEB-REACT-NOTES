import { useFormik } from "formik"

const FormikComponent = () => {
    let formik = useFormik({
        initialValues: {
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
        },
        onSubmit: (details) => {
            console.log(details)
        }
    })
    // console.log(formik)
    let { name, email, password, phone, dob, gender, skills, feedback, country } = formik.values
    let { handleChange, handleSubmit } = formik
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
                <input type="file" name="photoId" id="photoId" onChange={(e)=>{
                 formik.setFieldValue("photoId",e.target.files[0].name)
                }}/>
                <br /><br />
                <input type="submit" value="Register" />
            </fieldset>
        </form>
    )
}

export default FormikComponent