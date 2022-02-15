import { message } from 'antd'
import React, { useState } from 'react';
import '../style/style.css'
import '../style/bootstrap.min.css'

export default function Base() {

     const [charNumber, setCharNumber] = useState()

     const [password, setPassword] = useState()
     
     const handleChange = (e) => {
          setCharNumber(e.target.value)
     }

     const generate = () => {
          if (charNumber) {
               // collect chars
               const passwordList = []

               // chars used
               const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
               const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
               const symbols = ['%', '$', '&', '€', '£', '¥', '~', '|', '}', '{', '-', '^', '<', '>']
               const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
     
               // check if the password length is equal to number specified
               // eslint-disable-next-line eqeqeq
               while (passwordList.length != charNumber) {
                    // get a random number
                    const randomType = Math.floor(Math.random() * 4)
                    
                    // switch number to get type
                    switch (randomType) {
                         case 0:
                              passwordList.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)])
                              break;
                         
                         case 1:
                              passwordList.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)])
                              break;
                         
                         case 2:
                              passwordList.push(symbols[Math.floor(Math.random() * symbols.length)])
                              break;

                         case 3:
                              passwordList.push(numbers[Math.floor(Math.random() * numbers.length)])
                              break;
                    
                         default:
                              break;
                    }
               }

               // join chars
               setPassword(passwordList.join(""))
          }
          else {
               message.error("Enter a number", 3)
          }
     }

     const handleCopy = () => {
          if (password) {
               // copy passowrd to clipboard
               navigator.clipboard.writeText(password);
               message.success("Copied successfully", 3)
          }
          else {
               message.error("Generate Password", 3)
          }
          
     }

     return (
          <main className="main-content">
               <h1 className="h3 mb-3 fw-normal">PASSWORD  GENERATOR</h1>

               <div className="form-floating">
                    <input 
                         type="text" 
                         className="form-control" 
                         id="floatingInput" 
                         placeholder="Generate Password" 
                         value={password ? password : ""}
                    />
                    <label for="floatingInput">Generate Password</label>
               </div>

               <div className='characters-length'>
                    <span>
                         Number of Characters: 
                    </span>
                    <input 
                         type="number"
                         value={charNumber}
                         className="form-control"
                         onChange={handleChange}
                    />
               </div>

               <div className='buttons'>
                    <button 
                         className="w-20 btn btn-lg btn-primary" 
                         type="button"
                         id="generate"
                         onClick={generate}
                    >
                         Generate
                    </button>
                    <button 
                         className="w-20 btn btn-lg btn-primary" 
                         type="button"
                         id="copy"
                         onClick={handleCopy}
                    >
                         Copy
                    </button>
               </div>
               <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
          </main>

    )
}