<script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxJPTZN6x2rxZynvk4lvf2Yg1A3yZTrbZOmvbWrpmU3F2YRaTn5jqsn6crVM3rCln5H/exec'
        const form = document.forms['google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            .catch(error => console.error('Error!', error.message))
        })
      </script>