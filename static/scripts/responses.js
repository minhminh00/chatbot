function getBotResponse(input) {
    if (input.toLowerCase() == "date") {
        return "Bot: To day is "+ new Date().toLocaleDateString();
    }else if (input.toLowerCase() == "time") {
        return "Bot: It's "+ new Date().toLocaleTimeString()+" now";
    }

    if (input == "hello") {
        return "Chào bạn ! Tôi là Botchat.";
    } else if (input == "tạm biệt") {
        return "Tạm biệt! Chúc bạn ngày mới tốt lành.";
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