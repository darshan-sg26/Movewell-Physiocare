import React from "react";
import { Activity } from "lucide-react";
import { ConditionItem } from "@/data/conditions";

interface ConditionCardProps {
  condition: ConditionItem;
}

export function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E3DCC9] shadow-sm flex flex-col justify-between hover:border-[#2F5245] transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full bg-[#16241F]/10 text-[#16241F] text-xs font-semibold uppercase tracking-wider">
            {condition.category}
          </span>

          {condition.isPlaceholder && (
            <span className="text-[10px] text-[#4A5049] font-medium bg-[#F6F2E9] px-2 py-0.5 rounded border border-[#E3DCC9]">
              Example
            </span>
          )}
        </div>

        <h4 className="text-base font-bold text-[#12140F] mb-1.5 flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#2F5245] shrink-0" aria-hidden="true" />
          <span>{condition.name}</span>
        </h4>

        <p className="text-xs text-[#4A5049] leading-relaxed">
          {condition.description}
        </p>
      </div>
    </div>
  );
}
