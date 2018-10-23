package com.autoplus.controllers;

import com.autoplus.entity.Banner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class BannersController {
    @RequestMapping(value = {"/banners"}, method = RequestMethod.GET)
    public ResponseEntity<List<Banner>> index() {
        List<Banner> list = new ArrayList<>();
        list.add(new Banner("../../static/img/slide01.jpg","Car service","Up to 50% Discount", "Shop Now"));
        list.add(new Banner("../../static/img/banner02.jpg", "HOT DEAL", "Up to 50% OFF", "Shop Now"));
        list.add(new Banner("../../static/img/banner03.jpg", "New Product","Collection","Shop Now"));
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
