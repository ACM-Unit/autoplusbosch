package com.autoplus.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class TestController {
    @RequestMapping(value = {"/datatest"}, method = RequestMethod.GET)
    public ResponseEntity<List<String>> index() {
        List<String> list = new ArrayList<>();
        list.add("Nissan");
        list.add("Mersedes");
        list.add("BMW");
        list.add("Audi");
        list.add("Volkswagen");
        list.add("Range Rover");
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}