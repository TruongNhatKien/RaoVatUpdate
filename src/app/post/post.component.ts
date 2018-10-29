import { Component, OnInit } from '@angular/core';
import { HttpService } from '../providers/http.service';
import { User } from '../interfaces/User';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  imageUrl: string = "./assets/default.jpg";
  fileToUpload: File = null;
  user: User;

  namePr: string = '';
  pricePr: number;
  infoPr: string = '';
  khuVucPr: string = '';
  menuproductPr: number;
  addrUser: string = '';

  constructor(
    private httpService: HttpService,
    private toastr: ToastrService,
    private titleService: Title,
    
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Post Product");
    this.imageUrl;
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  showSuccess() {
    this.toastr.success('Đăng tin thành công!');
  }

  showError() {
    this.toastr.error('Bạn vui lòng nhập đầy đủ thông tin!');
  }


  postIfPr() {
    if (this.addrUser.length !== 0 && this.namePr.length !== 0 && this.khuVucPr.length !== 0 && this.pricePr !== null && this.infoPr.length !== 0 && this.menuproductPr != null) {
      const postIf: any = {
        name: this.namePr,
        price: this.pricePr,
        info: this.infoPr,
        khuVuc: this.khuVucPr,
        idUser: this.user.idUser,
        status: '',
        menuproduct: this.menuproductPr,
        tenUser: this.user.name,
        title: this.namePr,
        addr: this.addrUser,
      };
      this.httpService.postPro(postIf).subscribe(data => {
        // this.fileStore.loadDataIfNeed();
        this.showSuccess();
      });
      this.namePr = '';
      this.pricePr = null;
      this.infoPr = '';
      this.addrUser = '';
    } else if (this.namePr.length === 0 || this.infoPr.length === 0 || this.pricePr === null || this.khuVucPr.length === 0 || this.addrUser.length === 0 || this.menuproductPr == null) {
      this.showError();
    }
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  selectChangeHandler(event: any) {
    this.khuVucPr = event.target.value;
  }
  selectChangeHandlerPro(event: any) {
    this.menuproductPr = event.target.value;
  }
}