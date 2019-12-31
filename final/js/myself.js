//隱藏視窗
$("#ooo").modal('hide');

//開啟視窗
$("#ooo").modal('show');

//切換視窗顯示、不顯示
$("#ooo").modal('toggle');

//判斷視窗是否開啟中
if ($("#ooo").hasClass('in')) {
    console.log('視窗目前是開啟的狀態..');
}


var json = [{ "title": "大凶", "text": "哈哈哈哈你很衰喔" }, { "title": "凶", "text": "還好拉沒那麼衰但是還是蠻衰的哈哈哈哈哈" },
    { "title": "小凶", "text": "你以為小凶沒有很衰嗎?它還是凶阿" }, { "title": "小吉", "text": "只是有點小運氣還是沒有用哈哈哈" },
    { "title": "吉", "text": "會被吉喔" }, { "title": "大吉", "text": "好運一下就用完了拉馬上就會變衰的拉" },
    { "title": "普", "text": "跟你的人生一樣,什麼都沒有" }
];
var title, text;
/*$.ajax({
    url: "./final.json", //json檔案位置
    type: "GET", //請求方式為get
    dataType: "json", //返回資料格式為json
    success: function(data) { //請求成功完成後要執行的方法
        $.each(data.first, function(i, item) {
            r = rand(1, 7);
            titlename = 'title' + r;
            textname = 'text' + r;
            title = item.titlename;
            text = item.textname;

        })

    }
})*/
$('#confirm').on('click', () => {
    let star = $('#star').val();
    let blood = $('#blood').val();
    console.log(star);
    console.log(blood);

    if (star != '' & blood != '') {
        //console.log('haha');
        $('#start').attr('disabled', false);
    } else {
        $('#start').attr('disabled', true);
        alert('給我填!');
    }

    if (star == '雙子' | star == '雙魚' | star == '獅子' | star == '處女' | star == '水瓶' | star == '天秤' | star == '射手' | star == '牡羊' | star == '魔羯' | star == '金牛' | star == '巨蟹' | star == '天蠍') {
        if (blood == 'A' | blood == 'B' | blood == 'AB' | blood == 'O') {
            $('#start').attr('disabled', false);
        } else {
            $('#start').attr('disabled', true);
            alert('不要亂填 == ');
        }
    } else {
        $('#start').attr('disabled', true);
        alert('不要亂填 == ');
    }

})

$('#start').on('click', () => {
    $(document).ready(function() {
        $('#resulttitle').empty();
        $('#resulttext').empty();
        var r = rand(0, 6);
        title = json[r].title;
        text = json[r].text;
        //console.log(title);
        // 產生 div 的 jQuery 物件在變數 $div
        $p = $('<p>')
        $p1 = $('<p>')

        // 將 $img 插入到 $div 內
        $p.append(title)
        $p1.append(text)

        // 將 $div 插入到網頁 id=data 的html element 裡面
        $('#resulttitle').append($p)
        $('#resulttext').append($p1)
        let mystar = $('#star').val();
        let myblood = $('#blood').val();
        console.log(mystar);
        console.log(myblood);
        $('#mystar').text(mystar);
        $('#myblood').text(myblood);
    })

})

$('#quit').on('click', () => {
    //console.log(title);
    $('#start').attr('disabled', true);
})
$('#quit1').on('click', () => {
    //console.log(title);
    $('#start').attr('disabled', true);
})

let mystar = +$('#star').text();
let myblood = +$('#blood').text();
console.log(mystar);
console.log(myblood);
$('#mystar').val(mystar);
$('#myblood').val(myblood);