import React from 'react'

import { useSelector } from 'react-redux'

import useStyles from './style'
import { colorTheater } from '../../../constants/theaterData'

export default function ResultBookTicket() {
  const { isMobile, amount, email, phone, paymentMethod, listSeatSelected, successBookTicketTicketMessage, errorBookTicketMessage, danhSachPhongVe: { thongTinPhim } } = useSelector((state) => state.BookTicketReducer)
  const { currentUser } = useSelector((state) => state.authReducer)
  const classes = useStyles({ thongTinPhim, color: colorTheater[thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()], isMobile })

  return (
    <div className={classes.resultBookTicket}>
      <div className={classes.infoTicked} >
        <div className={classes.infoTicked__img}>
        </div>
        <div className={classes.infoTicked__txt}>
          <p className={classes.tenPhim}>
            {thongTinPhim?.tenPhim}
          </p>
          <p className={classes.text__first}><span>{thongTinPhim?.tenCumRap.split("-")[0]}</span><span className={classes.text__second}>-{thongTinPhim?.tenCumRap.split("-")[1]}</span></p>
          <p className={classes.diaChi} >{thongTinPhim?.diaChi}</p>
          <table className={classes.table}>
            <tbody>
              <tr>
                <td valign='top' >Suất chiếu:</td>
                <td valign='top'>{`${thongTinPhim?.gioChieu} ${thongTinPhim?.ngayChieu}`}</td>
              </tr>
              <tr>
                <td valign='top'>Phòng:</td>
                <td>{thongTinPhim?.tenRap}</td>
              </tr>
              <tr>
                <td valign='top'>Ghế:</td>
                <td>{listSeatSelected?.join(", ")}</td>
              </tr>
              <div>
                <img src="data:image/png;base64,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"></img>
              </div>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div>
          <h3 className={classes.infoResult_label}>Thông tin đặt vé</h3>
          <table className={`${classes.table} table`}>
            <tbody>
              <tr>
                <td valign='top' >Họ tên:</td>
                <td>{currentUser?.hoTen}</td>
              </tr>
              <tr>
                <td valign='top'>Điện thoại:</td>
                <td valign='top'>{phone}</td>
              </tr>
              <tr>
                <td valign='top'>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td valign='top'>Trạng thái:</td>
                <td>
                  {successBookTicketTicketMessage && <span>Đặt vé thành công qua <span className={classes.paymentColor}>{paymentMethod}</span></span>}
                  {errorBookTicketMessage && <span>Đặt vé thất bại: <span className={classes.errorColor}>{errorBookTicketMessage}</span></span>}
                </td>
              </tr>
              <tr>
                <td valign='top' >Tổng tiền:</td>
                <td valign='top'><span>{`${amount.toLocaleString('vi-VI')} đ`}</span></td>
              </tr>
            </tbody>
          </table>
          {successBookTicketTicketMessage && <p className={classes.noteresult}>Kiểm tra lại vé đã mua trong thông tin tài khoản của bạn !</p>}
        </div>
      </div>
    </div>
  )
}
