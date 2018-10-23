package com.autoplus.entity;

import java.util.Objects;

public class Banner {

    public Banner(String image, String textH, String text, String button) {
        this.image = image;
        this.textH = textH;
        this.text = text;
        this.button = button;
    }

    private String image;
    private String textH;
    private String text;
    private String button;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTextH() {
        return textH;
    }

    public void setTextH(String textH) {
        this.textH = textH;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getButton() {
        return button;
    }

    public void setButton(String button) {
        this.button = button;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Banner)) return false;
        Banner banner = (Banner) o;
        return Objects.equals(image, banner.image) &&
                Objects.equals(textH, banner.textH) &&
                Objects.equals(text, banner.text) &&
                Objects.equals(button, banner.button);
    }

    @Override
    public int hashCode() {

        return Objects.hash(image, textH, text, button);
    }
}
