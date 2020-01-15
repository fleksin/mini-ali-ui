Page({
  data: {
    iconTypes: [
      'qr',
      'share',
      'picture',
      'add-square',
      'file',
      'text',
      'minus-sqaure',
      'barcode',
      'wallet',
      'scan-code',
      'receipt',
      'down-circle',
      'bill-note',
      'trash',
      'bill',
      'scan',
      'content',
      'circle',
      'play',
      'limit',
      'money',
      'link',
      'zoom-in',
      'koubei',
      'location',
      'capslock',
      'time-5',
      'warn',
      'help',
      'close-circle',
      'selected',
      'search',
      'net',
      'chat',
      'contacts',
      'appx',
      'question',
      'person-setting',
      'setting',
      'like',
      'ant',
      'add',
      'more',
      'more-1',
      'zoom-out',
      'money-circle',
      'collect',
      'voice',
      'good',
      'voice-limit',
      'people',
      'person-add',
      'download',
      'sad',
      'left',
      'right',
      'eye-close',
      'eye',
      'koubei_',
      'star_',
      'check',
      'chat_',
      'help_',
      'key_',
      'lock_',
      'people_',
      'voice-limit_',
      'location_',
      'phone_',
      'logo-alipay_',
      'person-delete_',
      'wait_',
      'apps_',
      'microphone_',
      'pen_',
      'close_',
      'question_',
      'down_',
      'certified-check_',
      'certified-warn_',
      'sad_',
      'ant_',
      'time-5_',
      'warn_',
      'person-circle_',
      'time-3_',
      'check_',
      'logo-alipays',
      'like_',
      'home',
      'eye_',
      'edit_',
      'mail_',
      'forbid_',
      'eye-limit_',
      'delete-person_',
      'close',
      'address-book_',
      'person',
      'gift',
      'add-message',
      'alipay',
      'phone-book_',
      'delete_',
      'down',
      'up',
    ],
    searchIcon: [],
  },
  searchIcon(e) {
    const inputValue = e.detail.value;
    const _this = this;
    const searchIcon = [];
    this.data.iconTypes.forEach((evalue) => {
      if (evalue.match(inputValue)) {
        searchIcon.push(evalue);
        _this.setData({
          searchIcon,
        });
      }
    });
  },
});
