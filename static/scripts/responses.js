function getBotResponse(input) {
        if (input == "xin chào" || input == "xin chao" || input == "xin chào bạn") {
        return "Chào bạn ! Tôi là Botchat.";
    } else if (input == "date") {
        return new Date().toLocaleDateString();
    } else if (input == "time") {
        return new Date().toLocaleTimeString();
    }

    if (input == "hello") {
        return "Chào bạn ! Tôi là Botchat.";
    } else if (input == "tạm biệt") {
        return "Tạm biệt! Chúc bạn ngày mới tốt lành.";
    } else {
        return "Thử hỏi một điều khác đi bạn!";
    }
}