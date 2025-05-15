const inputText = document.getElementById("userInput")
const btn = document.getElementById('submit')
const geminiResponseContainer = document.getElementById('geminiResponse')


btn.addEventListener('click', async () => {
  const inputText = document.getElementById("userInput")
  const userQuery = inputText.value.trim()
  geminiResponseContainer.textContent = '';
  try {
    // Use fetch to send the data to your backend
    const response = await fetch('/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userQuery }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }

    // // Get the response text (or JSON if your server returns JSON)
    const data = await response.json()
    geminiResponseContainer.textContent = data.response

  } catch (error) {
    console.error('Error during fetch:', error);
    alert('Error: ' + error.message);
  }
})