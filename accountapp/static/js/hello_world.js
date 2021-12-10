
function send_input() {
    axios.post('/accounts/hello_world/', {
        input_data: document.getElementById('input_data').value,
      })
      .then(function (response) {
        // POST 요청이 성공했을 경우 어떤 javascript 가 구동되어야 하는지에 대한 부분
        console.log(response);

        document.getElementsByName('text_1')[1].innerHTML = response.data['message'];   // 입력받은 text를 찾음
      })
      .catch(function (error) {
        console.log(error);
      });
}


<!-- 서버 호출 -->
axios.get('/accounts/hello_world/')
  .then(function (response) {
    // handle success
    console.log(response);

    // 성공 했을 때 동작
    document.getElementsByName('text_1')[0].innerHTML = response.data['message'];   //Return TEXT 를 찾음
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
