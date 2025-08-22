// axios vs fetch


function main() {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async response => {
        const json = await response.json();
        console.log(json.todos.length); 

      })
}

async function mainAxios() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length);

}
main();
mainAxios();