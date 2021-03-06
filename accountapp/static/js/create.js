
function send_input() {
    axios.post('/accounts/create/', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      })
      .then(function (response) {
        // POST 요청이 성공했을 경우 어떤 javascript 가 구동되어야 하는지에 대한 부분
        console.log(response);

        document.getElementById('alert_box').innerHTML = "<div class='btn btn-primary rounded-pill px-5'>가입이 성공했습니다.</div>"

      })
      .catch(function (error) {
        // POST 요청이 실패했을 경우 어떤 javascript 가 구동되어야 하는지에 대한 부분
        console.log(error);

        document.getElementById('alert_box').innerHTML = "<div class='btn btn-danger rounded-pill px-5'>가입이 실패했습니다.</div>"
      });
}



<!-- 서버 호출 -->
axios.get('/accounts/hello_world/')
  .then(function (response) {
    // handle success
    console.log(response);

    // 성공했을 경우 어떤 javascript 작업을 할지
    for (let i=0; i < response.data.length; i++) {
        document.getElementById('new_model_list').innerHTML += "<h5>" + response.data[i]['text'] + "</h5>";
        document.getElementById('new_model_list').innerHTML += "<p>" + response.data[i]['created_at'] + "</p>";
    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });