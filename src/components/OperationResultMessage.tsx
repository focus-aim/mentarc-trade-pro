import { useState } from "react";
import { ChevronDown, X, Copy, Check, MessageSquareQuote } from "lucide-react";
import type { ChatQuote } from "./InquiryResultMessage";

interface OperationResultMessageProps {
  onAction?: (action: string) => void;
  onQuote?: (quote: ChatQuote) => void;
  onSendPrompt?: (text: string) => void;
  expertAvatar?: string;
  /** 营销素材任务隐藏产品详情描述模块 */
  hideDescription?: boolean;
}

const PRODUCT_COPY = `标题：
40oz Double Wall Vacuum Insulated Beer Tumbler | Premium 