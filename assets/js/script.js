const getTitles = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = await fetch(url);
        const data = await response.json();

        data.slice(0, 20).forEach((element) => {
            console.log(element.title);
        });

    } catch (err) {
        console.error('Error al obtener los datos:', err);
    }
};

const sendMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información enviada");
        }, 3000);
    });
};

const ejecutarProceso = async () => {
    await getTitles();
    const message = await sendMessage();
    console.log(message)
};

ejecutarProceso();