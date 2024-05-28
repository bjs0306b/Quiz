const { useState } = React;

function App() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3000/web') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('webData', JSON.stringify(data));
                
                setData(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    };

    return (
        <div>
            <button onClick={fetchData}>INU</button>
            <div id="output">
                {data.map((item, index) => (
                    <div key={index}>
                        Class: {item.class}
                    </div>
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
