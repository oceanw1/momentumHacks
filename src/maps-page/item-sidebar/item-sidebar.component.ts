import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-item-sidebar',
  templateUrl: './item-sidebar.component.html',
  styleUrls: ['./item-sidebar.component.scss'],
})
export class ItemSidebarComponent implements OnInit {
  public locationId: any;
  public locationName: any;

  locations: Location = [
    {
      id: 1,
      name: 'Binus School Simprug',
      pay: 'School Fee: 67',
      time: 'School Time: 8AM - 2PM',
      address: 'Address: ***** *****',
      contact: 'Contact No: 08123456',
      description: 'Mid School',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd0%2F9e%2F4a%2Fd09e4a95894caf87b5828fbb9cf67d00.png&f=1&nofb=1',
    },
    {
      id: 2,
      name: 'JIS',
      pay: 'School Fee: 100',
      time: 'School Time: 8AM - 2PM',
      address: 'Address: ***** *****',
      contact: 'Contact No: 08123456',
      description: 'JIS school very okay school. We have a few franchise',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.classpoint.io%2Fwp-content%2Fuploads%2FLogo_0001_JIS_Logo.png&f=1&nofb=1',
    },
    {
      id: 3,
      name: 'SIS',
      pay: 'School Fee: 100',
      time: 'School Time: 8AM - 2PM',
      address: 'Address: ***** *****',
      contact: 'Contact No: 08123456',
      description: 'SIS school',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsisschools.org%2Fwp-content%2Fuploads%2F2018%2F03%2FSIS-Logo-Website-200x200.png&f=1&nofb=1',
    },
    {
      id: 3,
      name: 'Microsoft Internship',
      pay: 'Salary: micro',
      time: 'Work Time: 9AM - 5PM',
      address: 'Address: ***** *****',
      contact: 'Contact No: 08123456',
      description: 'Microsoft jobs / internship',
      logo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftemperfield.com%2Fwp-content%2Fuploads%2F2017%2F09%2FMicrosoft-Logo-icon-png-Transparent-Background-150x150.png&f=1&nofb=1',
    },
    {
      id: 4,
      name: 'Apple car engineer',
      pay: 'Salary: apple',
      time: 'Work Time: 10AM - 9PM',
      address: 'Address: ***** *****',
      contact: 'Contact No: 08123456',
      description: 'Apple is making a car now',
      logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F128x128%2F2016%2F08%2F01%2F639906_apple_512x512.png&f=1&nofb=1',
    },
    {
      id: 5,
      name: 'Bukalapak Coding',
      pay: 'Salary: Coding Salary',
      time: 'Work Time: 5AM - 2PM',
      address: 'Address: ***** *****',
      contact: 'Contact No: 08123456',
      description: 'tryna make a porno',
      logo: 'https://1.bp.blogspot.com/-ncuYgbFdTzo/WzH9-ZUjx0I/AAAAAAAADqU/qsaAXVRQQoghm15XDIuMko9gY4wGRxpyQCLcBGAs/w1200-h630-p-k-no-nu/Bukalapak%2BLogo%2BVisual%2B.png',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.locationId = params.get('id');

      // let id = parseInt(params.get('id'));
      // this.locationId = id;
    });
  }
  backToStart() {
    this.router.navigate(['/maps']);
  }
}

type Location = Array<{
  id: number;
  name: string;
  pay: string;
  time: string;
  address: string;
  contact: string;
  description: string;
  logo: string;
}>;
