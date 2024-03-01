# Singleton

## Overview

The Singleton Pattern is a design pattern in object-oriented programming that restricts the instantiation of a class to ensure that only one instance of the class exists in the application at any given time. It is commonly used when a single object is required to coordinate actions across the system or manage a shared or limited resource efficiently.

## Sequence diagram

```mermaid
sequenceDiagram
    Client1->>Singleton: getInstance()
    Singleton->>+Singleton: Check if instance exists
    alt Instance does not exist
        Singleton-->>-Singleton: Create new instance
        Singleton-->>Client1: Return instance
    else Instance exists
        Singleton-->>Client1: Return existing instance
    end
    Client2->>Singleton: getInstance()
    Singleton->>+Singleton: Check if instance exists
    Singleton-->>Client2: Return existing instance
