# 체크박스 전체 선택 및 삭제
```html
<input type="checkbox" name="chk" id="chkAll" onclick="chkAlls();">
<input type="checkbox" name="chk">
<input type="checkbox" name="chk">
```
```javascript
// 전체 체크박스 선택
function chkAlls() {
    if ($("#chkAll").is(':checked')) {
        $("input[type=checkbox]").prop("checked", true);
    } else {
        $("input[type=checkbox]").prop("checked", false);
    }
}

$(document).ready(function() {
    // 선택삭제
    $(".searchArea .btnArea .btn").click(function() {

        // $("#listTable tbody tr input[type='checkbox']:checked").parent('tr').remove();
        // 이렇게 작성하니 console에서는 나오지만 작동하지 않았다.

        // 아래처럼 변경하니 잘 작동 되었다.
        $("#listTable tbody tr").each(function() {
            if($(this).find("[name='chk']").prop("checked")) {
                $(this).remove();
            }
        });
    });
});
```