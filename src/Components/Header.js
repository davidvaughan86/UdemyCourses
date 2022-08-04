import PropTypes from 'prop-types'


import Button from './Button'


export const Header = (props, AddTask) => {
    // const onClick = () => {
    //     console.log(props.color, props.text)
    
    return (
        <div className = 'btns'>
            <h1 className={`addTaskForm ${AddTask.text ? 'text' : ''}`} > {props.title} </h1>
            
            <Button color='#3c90ce' text ='Add'/>
            
            
            
            
        </div>
    )

}   

    Header.propTypes = {
        title: PropTypes.string.isRequired
    
    }





// Header.defaultprops= {
//     title :' task tracker'
// }



// PROPs
// Giving attributes to components, placing props in the parameter of the component function. Add the “prop” to the component on the App.js
// Using dot notation to set a default with COMPONENT.defaultprops
// Can clear up props.”prop” with double {{ }} on function

// EX. 


// export const Header = ({{title}}) => {
//     return (
//         <header>
//         <h1> {title} </h1>
//         </header>
//     )
// }

