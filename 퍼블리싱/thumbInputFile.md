# 썸네일이 있는 file input 업로드

```html
<div class="fileArea thumbFileArea">     
    <div class="fileBox">
        <div class="thumbnail"></div>
        <span class="uploadArea">
            <input type="text" class="file_text"  name='file_path'/>
            <span class="file_upload">업로드</span>
            <span class="file_uploadClick">
                <input type="file" name="file_path" class="input_file" size="3">
            </span>
        </span>
    </div>        
</div>
```

```css
.fileArea {
  margin-bottom: 0;
}
.fileArea {
  width: fit-content;
  height: fit-content;
}
.thumbnail {
  width: 16rem;
  height: 12rem;
  margin-right: 1.6rem;
  border: 1px solid #cdd3d4;
  background: #ecefef center no-repeat;
  background-size: cover;
}
/*input file 커스텀 시작*/
.fileBox {
  display: flex; 
  align-items: center;
  margin-top: 2rem;
}
.uploadArea {
  position: relative;
  display: flex;
  gap: 0.8rem;
  vertical-align: top;
  margin-right: 4px;
}
.uploadArea * {
  vertical-align: middle;
}
.uploadArea .file_text {
  display: inline-block;
  width: 32rem;
  height: 4.8rem;
  padding: 1.2rem 2rem;
  border: 1px solid #E5E5E5;
  border-radius: 0.4rem;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 24px;
  color: #6C757D;
  overflow: hidden;
  resize: none;
}
.uploadArea .file_uploadClick {
  position: absolute;
  top: 0;
  right: 0;
  width: 8rem;
  overflow: hidden;
}
.uploadArea .file_uploadClick .input_file {
  width: 100%;
  filter: alpha(opacity=0);
  opacity: 0;
  height: 4.8rem;
}
.uploadArea .file_text + .file_upload {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 4.8rem;
  border: 0.1rem solid #4D4F57;
  border-radius: 0.4rem;
  box-sizing: border-box;
  background: #4D4F57;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 12px;
  letter-spacing: -0.3px;
  color: #ffffff;
}
```

```javascript
$(document).ready(function() {
    boxFile();
});

/*해당 input file url 업로드*/
function boxFile() {
    var $uploadArea = $('.uploadArea');
    $uploadArea.each(function() {
        var $uploadFile = $(this).find('.input_file'),
        $textFile = $(this).find('.file_text')
        $uploadFile.on('change', function() {
            var nameFile = $(this).val();
            $textFile.attr('disabled', 'disabled').val(nameFile);
        })     
        //업로드 된 url을 읽어 썸네일에 이미지 url을 반영
        //아래 imageFile함수랑 세트
        var imgUpload = $(this).siblings('.thumbnail');
        var filePath =  $(this).find('input[name="file_path"]'); 

        filePath.change(function(){
            imageFile(this, imgUpload);
        });
    })
}

//썸네일 이미지 넣기
function imageFile(input, thumbImg) {
    if (input.files && input.files[0]) {
        console.log('input file');
        var reader = new FileReader();
        reader.onload = function () {

            $(thumbImg).css("background-image", "url("+this.result+")"); 
        }
    reader.readAsDataURL(input.files[0]);
    }
}

```
