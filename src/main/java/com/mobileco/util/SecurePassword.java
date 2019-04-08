package com.mobileco.util;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.tomcat.util.codec.binary.Base64;

public class SecurePassword {
       static String key = "Bar12345Bar12345"; // 128 bit key
       static String initVector = "RandomInitVector"; // 16 bytes IV

       public SecurePassword() {
              // TODO Auto-generated constructor stub
       }

       public static String encrypt(String value) {
              try {
                     IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
                     SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

                     Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
                     cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);

                     byte[] encrypted = cipher.doFinal(value.getBytes());
                     System.out.println("encrypted string: " + Base64.encodeBase64String(encrypted));

                     return Base64.encodeBase64String(encrypted);
              } catch (Exception ex) {
                     ex.printStackTrace();
              }

              return null;
       }

       public static String decrypt(String encrypted) {
              try {
                     IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
                     SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

                     Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
                     cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);

                     byte[] original = cipher.doFinal(Base64.decodeBase64(encrypted));

                     return new String(original);
              } catch (Exception ex) {
                     ex.printStackTrace();
              }

              return null;
       }
}
