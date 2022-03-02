import { useRef} from 'react'
import Card from '../components/ui/Card';
import classes from './NewDateForm.module.css';

function NewDateForm(props) {
const titleInputRef= useRef();
const imageInputRef= useRef();
const datePickerRef= useRef();
const descriptionRef= useRef();
const selectOptionRef= useRef();

function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDatePicker = datePickerRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredSelectOption = selectOptionRef.current.value;

    const dateDate = {
        title: enteredTitle,
        image: enteredImage,
        date: enteredDatePicker,
        description: enteredDescription,
        gift: enteredSelectOption,        
    };

    props.onSaveTheDate(dateDate);
}
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Date Title To Remember</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Choose Image Of The One You Love</label>
                <input type='url' id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='date'>Date To Save</label>
                <input type="date" required id='date' ref={datePickerRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id="description" required rows='5' ref={descriptionRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>How To Make Them Happy?</label>
                <select id='gift' ref={selectOptionRef}>
                    <option value="">--Please choose an option--</option>
                    <option value="Flowers">Flowers</option>
                    <option value="Ice Cream">Ice Cream</option>
                    <option value="Balloons">Balloons</option>
                </select>
            </div>
            <div className={classes.actions}>
                <button>Save The Date</button>
            </div>
        </form>
    </Card>
}

export default NewDateForm
