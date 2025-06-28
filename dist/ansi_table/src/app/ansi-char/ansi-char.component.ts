import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "ansi-char",
  imports: [],
  templateUrl: "./ansi-char.html",
  styleUrl: "./ansi-char.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnsiChar {
  @Input()
  char_code: number = 0;

  get is_printable() {
    return this.char_code >= 32 && this.char_code !== 127;
  }

  get char() {
    if (this.char_code >= 32 && this.char_code !== 127) {
      return String.fromCharCode(this.char_code);
    } else {
      return "";
    }
  }

  get hex() {
    return "0x" + this.char_code.toString(16).toUpperCase().padStart(2, "0");
  }

  get binary() {
    return this.char_code.toString(2).padStart(8, "0");
  }

  get description() {
    return this.controlCharDescriptions[this.char_code] ||
      (this.is_printable ? "Printable ANSI" : "Extended ANSI");
  }

  private controlCharDescriptions: Record<number, string> = {
    0: "NUL (Null)",
    1: "SOH (Start of Header)",
    2: "STX (Start of Text)",
    3: "ETX (End of Text)",
    4: "EOT (End of Transmission)",
    5: "ENQ (Enquiry)",
    6: "ACK (Acknowledge)",
    7: "BEL (Bell)",
    8: "BS (Backspace)",
    9: "TAB (Horizontal Tab)",
    10: "LF (Line Feed)",
    11: "VT (Vertical Tab)",
    12: "FF (Form Feed)",
    13: "CR (Carriage Return)",
    14: "SO (Shift Out)",
    15: "SI (Shift In)",
    16: "DLE (Data Link Escape)",
    17: "DC1 (Device Control 1)",
    18: "DC2 (Device Control 2)",
    19: "DC3 (Device Control 3)",
    20: "DC4 (Device Control 4)",
    21: "NAK (Negative Acknowledge)",
    22: "SYN (Synchronous Idle)",
    23: "ETB (End of Block)",
    24: "CAN (Cancel)",
    25: "EM (End of Medium)",
    26: "SUB (Substitute)",
    27: "ESC (Escape)",
    28: "FS (File Separator)",
    29: "GS (Group Separator)",
    30: "RS (Record Separator)",
    31: "US (Unit Separator)",
    127: "DEL (Delete)",
  };
}
