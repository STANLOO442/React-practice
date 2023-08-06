import React, { FormEvent, useState,  } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";



const schema= z.object({
    name: z.string().min(3),
    age: z.number().max(2)
});
type FormData = z.infer<typeof schema>;


const Form = () => {
    
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>()
    console.log(register("age"))
    
    


    
  return (
    <form onSubmit={handleSubmit(data=> console.log(data))}>
      <div className="mb-3"><label htmlFor="name" className="form-label">Name</label><input {...register('name', {required: true, minLength: 3})} id="name" type="text" className="form-control" />{errors.name?.type=== 'required' && <p className="text-danger">The name field is required.</p>}{errors.name?.type === "minLength" && <p className="text-danger">Name must be at least 3 characters.</p>}</div>
      <div className="mb-3"><label htmlFor="age" className="form-label">Age</label><input {...register('age', {required: true, maxLength: 2})} id="age" type="number" className="form-control" /></div>
       <button disabled={!isValid} className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default Form
