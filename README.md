# mi DatePicker

I chose [react-day-picker](https://github.com/gpbl/react-day-picker) as the base for BabyShark's datepicker. I was considering [React Datepicker](https://github.com/Hacker0x01/react-datepicker), but it would require more work to make it look like we want.

I started with [v8-beta](https://github.com/gpbl/react-day-picker), but it turned out they don't fully support the API of [v7](https://github.com/gpbl/react-day-picker/tree/v7) yet (for example, current day don't receive `--today` CSS class yet, so we can't style it). I bet v8 will become stable before we release BabyShark though.

Here you can see this component live: https://robertkirsz.github.io/mi-datepicker/

The design is not pixel-perfect as that was not the goal of the task.
I wonder how the localization works, so people with non-English systems - let me know if you see months and days adequately translated.
The simplest way of having react-day-picker styled is to do `import 'react-day-picker/lib/style.css';`, but we can also copy that CSS file, modify it and apply instead (what I did).

This is the component itself: https://github.com/robertkirsz/mi-datepicker/blob/master/src/date-picker.tsx  
Here is the stylesheet based on the one provided by react-day-picker: https://github.com/robertkirsz/mi-datepicker/blob/master/src/date-picker.css

### TODO

This down-facing arrow right here 👇

<img width="250" src="./month-select.png" />

This package doesn't work out of the box, but creators thought about it, and [here](http://react-day-picker.js.org/examples/elements-year-navigation/) are instructions on how to achieve that. I'm sure that we can make it look like we want with a bit of styling.

### Links

Documentation of react-day-picker v7: http://react-day-picker.js.org/
