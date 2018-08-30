import React from 'react';
import FormDataComponent from './FormDataComponent'

class FormTemplate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formData:[
               {
                    element:'input',
                    value:'',
                    label:'',
                    label_text:'Name',
                    config:{
                        className:'form-control',
                        input_name:'name',
                        type:'text',
                        placeholder:'Enter your name'
                    },
                    validation:{
                        required:true,
                        min:3,
                        max:12
                    }
                },
                {
                    element:'input',
                    value:'',
                    label:'',
                    label_text:'SurName',
                    config:{
                        className:'form-control',
                        input_name:'surname',
                        type:'text',
                        placeholder:'Enter your surname'
                    },
                    validation:{
                        required:true,
                        min:3,
                        max:12
                    }
                },
                {
                    element:'textarea',
                    value:'',
                    label:'',
                    label_text:'text',
                    config:{
                        className:'form-control',
                        type:'textarea',
                        placeholder:'Enter your text'
                    },
                    validation:{
                        required:true
                    }
                },
                {
                    element:'select',
                    value:'',
                    label:'',
                    label_text:'select',
                    config:{
                        className:'form-control',
                        name:'Select',
                        type:'select',
                        placeholder:'Select item',
                        options:[
                            {text:'select 1' , value:'SELECT 1'},
                            {text:'select 2' , value:'SELECT 2'},
                            {text:'select 3' , value:'SELECT 3'},
                            {text:'select 4' , value:'SELECT 4'}
                        ]
                    },
                    validation:{
                        required:true
                    }
                },
            ]
        }
    }

submitHandler = (e) =>{
    e.preventDefault();

}
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <h1>FormTemplate</h1>
                <FormDataComponent formData = {this.state.formData}/>
                <button className='btn btn-primary' type='submit'>SUBMIT</button>
                </form>
            </div>
        );
    }
}


export default FormTemplate;
