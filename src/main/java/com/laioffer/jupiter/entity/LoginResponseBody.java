package com.laioffer.jupiter.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginResponseBody {
    // java object convert成JSON string给frontend
    @JsonProperty("user_id")
    private final String userId;

    @JsonProperty("name")
    private final String name;

    public LoginResponseBody(String userId, String name) {
        this.userId = userId;
        this.name = name;
    }

    public String getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }
}
