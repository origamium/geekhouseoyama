import { type LucideIcon } from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

interface FeatureCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <Card className="w-[340px]">
            <CardHeader>
                <Icon className="h-10 w-10 text-primary" />
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
        </Card>
    )
}
