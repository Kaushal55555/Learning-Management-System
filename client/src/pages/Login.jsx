import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });

    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput({ ...signupInput, [name]: value });
        } else {
            setLoginInput({ ...loginInput, [name]: value });
        }
    };

    const handleRegistration = (type) => {
        const inputData = type === "signup" ? signupInput : loginInput;
        console.log(inputData);
    };
        return (
            <div className="flex items-center w-full justify-center">
                <Tabs defaultValue="account">
                    <TabsList>
                        <TabsTrigger value="Signup">Signup</TabsTrigger>
                        <TabsTrigger value="Login">Login</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>Signup</CardTitle>
                                <CardDescription>
                                    Create a new account and click signup when you&apos;re done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="tabs-demo-name">Name</Label>
                                    <Input type="text" name="name" value={signupInput.name} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. Kaushal" required="true" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="tabs-demo-username">Email</Label>
                                    <Input type="email" name="email" value={signupInput.email} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. Kaushal@gmail.com" required="true" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="tabs-demo-username">Password</Label>
                                    <Input type="password" name="password" value={signupInput.password} onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. xyz" required="true" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={() => handleRegistration("signup")}>Signup</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Login your password here. After saving, you&apos;ll be logged
                                    in.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="tabs-demo-current">Email</Label>
                                    <Input type="email" name="email" value={loginInput.email} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. Kaushal@gmail.com" required="true" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="tabs-demo-new">Password</Label>
                                    <Input type="password" name="password" value={loginInput.password} onChange={(e) => changeInputHandler(e, "login")} placeholder="Eg. xyz" required="true" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={() => handleRegistration("login")}>Login</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        )
    }

    export default Login;
