const { useState } = React;

function App() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3000/web') // json-server의 주소입니다
            .then(response => {
                return response.json();
            })
            .then(data => {
                localStorage.setItem('webData', JSON.stringify(data));  
                setData(data);
            })
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
