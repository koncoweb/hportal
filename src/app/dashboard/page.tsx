import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { Role } from "@prisma/client";

// Using the Role enum from Prisma client

export default async function DashboardPage() {
  // Fetch user data and role from session
  const session = await getAuthSession();
  const userRole = session?.user.role || "PATIENT";
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your health portal dashboard.
        </p>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          {userRole === "PATIENT" && (
            <TabsTrigger value="book">Book Appointment</TabsTrigger>
          )}
          {userRole === "DOCTOR" && (
            <TabsTrigger value="schedule">My Schedule</TabsTrigger>
          )}
          {userRole === "ADMIN" && (
            <TabsTrigger value="manage">Management</TabsTrigger>
          )}
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>
                  Your next scheduled appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* TODO: Display upcoming appointments */}
                <p className="text-sm text-muted-foreground">
                  No upcoming appointments found.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Appointments
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Health Records</CardTitle>
                <CardDescription>
                  Access your medical history
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* TODO: Display recent health records */}
                <p className="text-sm text-muted-foreground">
                  Your medical records will appear here.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Medical History
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and actions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full">Book New Appointment</Button>
                <Button variant="outline" className="w-full">Update Profile</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="appointments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Appointments</CardTitle>
              <CardDescription>
                View and manage your appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* TODO: Implement appointments table */}
              <p className="text-muted-foreground">
                No appointments found. Book your first appointment now.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        {userRole === "PATIENT" && (
          <TabsContent value="book" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Book New Appointment</CardTitle>
                <CardDescription>
                  Schedule an appointment with a doctor
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* TODO: Implement booking form */}
                <p className="text-muted-foreground">
                  Booking form will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        )}
        
        {userRole === "DOCTOR" && (
          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Schedule</CardTitle>
                <CardDescription>
                  Manage your availability and appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* TODO: Implement doctor schedule management */}
                <p className="text-muted-foreground">
                  Schedule management will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        )}
        
        {userRole === "ADMIN" && (
          <TabsContent value="manage" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Administration</CardTitle>
                <CardDescription>
                  Manage users, departments, and system settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* TODO: Implement admin management interface */}
                <p className="text-muted-foreground">
                  Admin management interface will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}