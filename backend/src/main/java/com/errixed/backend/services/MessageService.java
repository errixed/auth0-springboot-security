package com.errixed.backend.services;


import com.errixed.backend.models.Message;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

  public Message getAdminMessage() {
    final var text = "This is an admin message.";

    return Message.from(text);
  }
}
