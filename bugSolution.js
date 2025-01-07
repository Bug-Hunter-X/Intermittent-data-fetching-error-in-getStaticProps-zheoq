```javascript
// pages/about.js
function About({ about }) {
  return (
    <div>
      <h1>About Page</h1>
      {about ? (
        <p>About content: {about.content}</p>
      ) : (
        <p>Failed to load about information.</p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://api.example.com/about');
    if (!response.ok) {
      // More robust error handling 
      console.error(`HTTP error! status: ${response.status}, response text: ${await response.text()}`);
      return {
        props: {
          about: null,
        },
      };
    }
    const data = await response.json();
    return {
      props: {
        about: data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        about: null,
      },
    };
  }
}
export default About; 
```