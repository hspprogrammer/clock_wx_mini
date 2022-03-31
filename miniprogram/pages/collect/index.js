const defaultAvatarUrl = 'https://6b79-kydk-9gefpree1ca906af-1305408647.tcb.qcloud.la/icon/%E5%A4%B4%E5%83%8F.png?sign=de1d6003c0099c1efdaa4666924d2d06&t=1648706562'

Page({
  data: {
    avatarUrl: defaultAvatarUrl,
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  }
})