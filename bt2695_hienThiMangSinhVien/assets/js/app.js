var app = angular.module("MyApp", []);
app.controller("MyController", function ($scope) {
  $scope.stdList = [
    {
      fullname: "Lê Hoài Nam",
      age: 1999,
      address: "Vĩnh Phúc",
      email: "hoainam12121999@gmail.com",
      phonenum: "0375877699",
    },
    {
      fullname: "Lê Xuân Trường",
      age: 2006,
      address: "Vĩnh Phúc",
      email: "xuantruong@gmail.com",
      phonenum: "",
    },
    {
      fullname: "Nguyễn Thanh Tùng",
      age: 1999,
      address: "Hà Nội",
      email: "https://www.facebook.com/thanhtung247999",
      phonenum: "",
    },
    {
      fullname: "Nguyễn Bá Trường",
      age: 2003,
      address: "Hà Nội",
      email: "https://www.facebook.com/profile.php?id=100052110491354",
      phonenum: "",
    },
    {
      fullname: "Đỗ Minh Thành",
      age: 2003,
      address: "Hà Nội",
      email: "https://www.facebook.com/profile.php?id=100012163268283",
      phonenum: "",
    },
    {
      fullname: "Phạm Quốc Thắng",
      age: 2003,
      address: "Lào Cai",
      email: "https://www.facebook.com/pq.thang2003",
      phonenum: "",
    },
    {
      fullname: "Trần Hoàng Việt",
      age: 2002,
      address: "Hà Giang",
      email: "https://www.facebook.com/profile.php?id=100035738761329",
      phonenum: "",
    },
    {
      fullname: "Vũ Tiến Tuần",
      age: 2001,
      address: "Hà Nội",
      email: "https://www.facebook.com/profile.php?id=100010700259625",
      phonenum: "",
    },
  ];
});
