
let arabicOutput = document.getElementById("arabic-output")
let mathOutput = document.getElementById("math-output")
let scienceOutput = document.getElementById("science-output")
let ictOutput = document.getElementById("ict-output")
let englishOutput = document.getElementById("english-output")
let historyOutput = document.getElementById("history-output")

document.getElementById('form').addEventListener('submit', async (e) => {
      let math= document.getElementById("math").value
      let science=document.getElementById("science").value
      let arabic=document.getElementById("arabic").value
      let english=document.getElementById("english").value
     let history=document.getElementById("history").value
     let ict=document.getElementById("ict").value
   

     e.preventDefault();


      if(arabic < 51){
      console.log("ملحق")
      arabicOutput.innerHTML = `ملحق`
      } else if(arabic <= 70){
      console.log("مقبول")
      arabicOutput.innerHTML = `مقبول`

      }
       else if(arabic <= 80){
      console.log("جيد")
      arabicOutput.innerHTML = `جيد`

      }
      else if(arabic <= 89){
      console.log("جيد جدا")
      arabicOutput.innerHTML = `جيد جدا`

      }
      else if(arabic >= 90){
      console.log("ممتاز")
      arabicOutput.innerHTML = `ممتاز`

      }

      if(english < 50){
      console.log("ملحق")
      englishOutput.innerHTML = `ملحق`

      } else if(english <= 70){
      console.log("مقبول")
      englishOutput.innerHTML = `مقبول`

      }
       else if(english <= 80){
      console.log("جيد")
      englishOutput.innerHTML = `جيد`

      }
      else if(english <= 89){
      console.log("جيد جدا")
      englishOutput.innerHTML = `جيد جدا`
      }
      else if(english >= 90){
      console.log("ممتاز")
      englishOutput.innerHTML = `ممتاز`

      }

      if(history < 50){
      console.log("ملحق")
      historyOutput.innerHTML = `ملحق`

      } else if(history <= 70){
      console.log("مقبول")
      historyOutput.innerHTML = `مقبول`
      
      }
       else if(history <= 80){
      console.log("جيد")
      historyOutput.innerHTML = `جيد`

      }
      else if(history <= 89){
      console.log("جيد جدا")
      historyOutput.innerHTML = `جيد جدا`

      }
      else if(history >= 90){
      console.log("ممتاز")
      historyOutput.innerHTML = `ممتاز`

      }

      if(math < 50){
      console.log("ملحق")
      mathOutput.innerHTML = `ملحق`

      } else if(math <= 70){
      console.log("مقبول")
      mathOutput.innerHTML = `مقبول`

      }
       else if(math <= 80){
      console.log("جيد")
      mathOutput.innerHTML = `جيد`

      }
      else if(math <= 89){
      console.log("جيد جدا")
      mathOutput.innerHTML = `جيد جدا`

      }
      else if(math >= 90){
      console.log("ممتاز")
      mathOutput.innerHTML = `ممتاز`

      }

      if(ict < 50){
      console.log("ملحق")
      ictOutput.innerHTML = `ملحق`

      } else if(ict <= 70){
      console.log("مقبول")
      ictOutput.innerHTML = `مقبول`

      }
       else if(ict <= 80){
      console.log("جيد")
      ictOutput.innerHTML = `جيد`

      }
      else if(ict <= 89){
      console.log("جيد جدا")
      ictOutput.innerHTML = `جيد جدا`

      }
      else if(ict >= 90){
      console.log("ممتاز")
      ictOutput.innerHTML = `ممتاز`

      }

      if(science < 50){
      console.log("ملحق")
      scienceOutput.innerHTML = `ملحق`

      } else if(science <= 70){
      console.log("مقبول")
      scienceOutput.innerHTML = `مقبول`

      }
       else if(science <= 80){
      console.log("جيد")
      scienceOutput.innerHTML = `جيد`

      }
      else if(science <= 89){
      console.log("جيد جدا")
      scienceOutput.innerHTML = `جيد جدا`

      }
      else if(science >= 90){
      console.log("ممتاز")
      scienceOutput.innerHTML = `ممتاز`

      }

 
})



      
 
