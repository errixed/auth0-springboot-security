package com.errixed.backend.controllers;


import com.errixed.backend.models.Message;
import com.errixed.backend.services.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/messages")
public class MessageController {

  private final MessageService messageService;

  @GetMapping("/admin")
  @PreAuthorize("hasRole('read:admin-messages')")
  public Message getAdmin() {
    return messageService.getAdminMessage();
  }
}
