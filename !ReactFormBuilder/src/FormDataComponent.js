import React from 'react';

class FormDataComponent extends React.Component {

    renderFields = (props) => {
        const data = this.props.formData;
        const arrForm = [];
        for (let i in data) {
            arrForm.push({
                id: data[i].label_text,
                settings: this.props.formData[i]
            })
        }
        return arrForm.map((item,index)=>{
            return<div key={index}>
            {this.renderTemplates(item)}
            </div>
        });

    }

    renderTemplates = (data) => {
console.log(data)

        let formTemplate = '';
        let values = data.settings;


        switch (values.element) {
            case ('input'):
                formTemplate = (
                    <div>
                      
                        <input
                            {...values.config}
                            value={values.value}
                        
                        />
                    
                    </div>
                )
                break;
            case ('textarea'):
                formTemplate = (
                    <div>
                      
                        <textarea
                            {...values.config}
                            value={values.value}
                          
                        />
                    </div>
                )
                break;
            case ('select'):
                formTemplate = (
                    <div>
                  
                        <select
                            value={values.value}
                            name={values.config.name}
                            className={values.config.className}
                          
                        >
                            {values.config.options.map((item, i) => (
                                <option key={i} value={item.val}>
                                    {item.text}
                                </option>
                            ))}

                        </select>
                    </div>
                )
                break;
            default:
                formTemplate = null
        }
        return formTemplate;
    }

    render() {


        const form = this.renderFields();
        console.log(form)
        return (
            <div>
                <h2>FormDataComponent</h2>
                {form}
            </div>
        )
    }
}

export default FormDataComponent;