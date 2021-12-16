/**
 * @file Generate text to QRcode DataURL
 * @module transforms.qrcode
 * @author Surmon <https://github.com/surmon-china>
 */

import QRCode, { QRCodeToDataURLOptions } from 'qrcode'

export async function renderTextToQRCodeDataURL(value: string, options?: QRCodeToDataURLOptions) {
  return await QRCode.toDataURL(value, {
    scale: 6,
    ...options
  })
}
