function getBotResponse(input) {
    if (input.toLowerCase() == "date") {
        return "Bot: To day is "+ new Date().toLocaleDateString();
    }else if (input.toLowerCase() == "time") {
        return "Bot: It's "+ new Date().toLocaleTimeString()+" now";
    }

    const arrayResponsHello = ["Hi there!", "Hello", "Good morning"];
    // const arrayResponsTime = ["time is 09:38PM", "today is Monday"];
    // const arrayAnswerTime = ['time', 'what time is it']

    const arrayAnswerHello = ["hi", "hello", "bello", "good morning"]
    var flagAnswer = false;
    for (let i = 0; i < arrayAnswerHello.length; i++) {
        if (input.toLowerCase().includes(arrayAnswerHello[i])) {
            flagAnswer = true;
            break;
        }
    }
    if (!flagAnswer) {
        return "Bot: I don't understand";
    } else {
        const botRepHello = Math.floor(Math.random() * arrayResponsHello.length);
        return "Bot: " + arrayResponsHello[botRepHello];
    }
    
    // const arrayResponsWeather = ["Current weather : Temperature: 21 độ C, wind: 3km/h, humidity: 64%, Possibility of rain: 84%", "Nice !", "Perfect"];
    // const arrayAnswerWeather = ['weather', '1', '2', '3']
    // var flagAnswerWeather = false;
    // for (let i = 0; i < arrayAnswerWeather.length; i++) {
    //     if (input.toLowerCase().includes(arrayAnswerWeather[i])) {
    //         flagAnswerWeather = true;
    //         break;
    //     }
    // }if (!flagAnswerWeather) {
    //     return "Bot: I don't understand";
    // } else {
    //     const botRepWeather = Math.floor(Math.random() * arrayResponsWeather.length);
    //     return "Bot: " + arrayResponsWeather[botRepWeather];
    // }
}



