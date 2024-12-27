import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

function form (){
    // our schema will be of object type , that means our data is object 
    // shape is used for making the blueprint of the object , set the name as used inside the parameter of register function
    const schema = yup.object().shape({
        fullName: yup.string().required("Your FullName is Required"),
        email:yup.string().email().required("Please Enter Correct Email Address"),
        age:yup.number().positive().integer().min(18).required("Age should be greater than 17"),
        password:yup.string().min(8).max(20).required("Password Should be min of 8 characters and Max 20"),
        confirmpassword:yup.string().oneOf([yup.ref("password"), null]).required("Should Match with above password")
    });

    // both register and handlesub,it is a function and 
    // and handlesubmit does all task prior to submiting the form

    // need to install : npm install @hookform/resolvers it helps us in integration between two libraries react-hook-form an yup
    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema),
        // resolver checks the schema as comparing using yupResolver which takes parameter schema
    });

    const onSubmission = (data) => {
        console.log(data);
    }
    // THe data we will get are stored as object lets consider that 
    // so register takes the parameter/arguments as the objects value's Key, it maintains the key of the value
    // like this {fullName: 'Binayak', email: 'njxcnsd', age: 'jnjsdf', password: 'sdfg', confirmPassword: 'jaafds'}

    const ErrorMessage = ({ error }) => {
        return error && <p style={{ color: 'red' }}>{error?.message}</p>
    }
    return(
        <form onSubmit={handleSubmit(onSubmission)}>
            <input type="text" placeholder="Enter your Full Name.." {...register("fullName")}/>
            <ErrorMessage error={errors.fullName} />
            <br />
            <input type="text" placeholder="Enter your Email..." {...register("email")}/>
            <ErrorMessage error={errors.email} />
            <br />
            <input type="number" placeholder="Enter your Age..." {...register("age")}/>
            <ErrorMessage error={errors.age} />
            <br />
            <input type="password" placeholder="Password" {...register("password")}/>
            <ErrorMessage error={errors.password} />
            <br />
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
            <ErrorMessage error={errors.confirmpassword} />
            <br />
            <input type="submit" />
        </form>
    )
}
export default form