import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  badge?: string;
  sub?: string;
  period?: string;
  className?: string;
}

export default function StatCard({
  label,
  value,
  badge,
  sub,
  period,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("min-w-[150px]", className)}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs text-[#aaa]">{label}</p>
          {period && <p className="text-[10px] text-[#bbb]">{period}</p>}
        </div>
        <div className="flex items-baseline gap-2">
          <p className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#111]">
            {value}
          </p>
          {badge && <Badge variant="success">{badge}</Badge>}
        </div>
        {sub && <p className="text-[10px] text-[#bbb] mt-0.5">{sub}</p>}
      </CardContent>
    </Card>
  );
}