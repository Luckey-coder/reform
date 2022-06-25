# Reform.js

> a simple and quick-to-use react form

Reform  is simple to use react  validated form that, reduces the stress of writing   controlled input
or form validation. with Reform, you will be able to write less and clean code for the   complex react form. 

## Installation

```sh
npm install Reform.js
```

## Usage

```javascript
import  {Input,Textarea,Select,Button,validatedForm} from 'reform';
// Example
<form>
      <Input
       label='string<The Label of the input>[DYNAMIC TYPE]'
       id='string<input.id for any DOM activities>[DYNAMIC TYPE]'
       type='string<It defined the structure of  input i.e input[type="text"] differ from input[type="password"]>[DYNAMIC TYPE]'
       name='string<IMPORTANT:[firstname |pastname|password|email|date] are stricty to avoid error >[STATIC TYPE]'
       error='string<Message to be shown if any  thing goes wrong >[DYNAMIC TYPE]'
        />
        <Textarea
       label='string<The Label of the textarea>[DYNAMIC TYPE]'
       id='string<textarea.id for any DOM activities>[DYNAMIC TYPE]'
        error='string<Message to be shown if any  thing goes wrong >[DYNAMIC TYPE]'
        />
      <Select
       label='<The Label of the select>[DYNAMIC TYPE]>[DYNAMIC]'
       id='string<select.id for any DOM activities>[DYNAMIC TYPE]'
      list='array<The list of your input>[DYNAMIC TYPE]'
      firstListName='string|integer<the first item in the array i.e array[0]>'
      />
      <Button text='Submit' text='string<string to be render on the page. example: submit|done>'/>
       </form>
  )}
```
## Getting value from the form 
Importing and calling the validateForm return the value of the  form created
```js
<form onSubmit={(e=>{
      e.preventDefault()
       console.log(validatedForm()) // an object containing all form field created by the user is validated and return
     })}>
      <Input
       label='string<The Label of the input>[DYNAMIC TYPE]'
       id='string<input.id for any DOM activities>[DYNAMIC TYPE]'
       type='string<It defined the structure of  input i.e input[type="text"] differ from input[type="password"]>[DYNAMIC TYPE]'
       name='string<IMPORTANT:[firstname |pastname|password|email|date] are stricty to avoid error >[STATIC TYPE]'
       error='string<Message to be shown if any  thing goes wrong >[DYNAMIC TYPE]'
        />
        <Textarea
       label='string<The Label of the textarea>[DYNAMIC TYPE]'
       id='string<textarea.id for any DOM activities>[DYNAMIC TYPE]'
        error='string<Message to be shown if any  thing goes wrong >[DYNAMIC TYPE]'
        />
      <Select
       label='<The Label of the select>[DYNAMIC TYPE]'
       id='string<select.id for any DOM activities>[DYNAMIC TYPE]'
      list='array<The list of your input>[DYNAMIC TYPE]'
      firstListName='string | intege r<the first item in the array i.e array[0]>'
      />
      <Button text='Submit' text='string<string to be render on the page. example: submit|done>'/>
       </form>
  )}
```
## Input[type="password"] criteria
 the password consist of letter both capital and small letter
 it also incude  the following symbols: . @ : ? $ &
this elements mentioned above need to be insert in the form password field for it's validity
### Note: this is template with limited functionality
 it  shoul be used in the following:
 1. a sign up or sign in page with username,firstname,lastname,email, a comment and password.
 2. a single page application with limited form field (username,firstname,lastname,email, a comment and password).
 3. a simple react form project. 

 